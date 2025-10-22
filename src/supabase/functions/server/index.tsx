import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Enable CORS and logging
app.use('*', cors());
app.use('*', logger(console.log));

// Health check
app.get('/make-server-24861ad3/health', (c) => {
  return c.json({ status: 'ok' });
});

// Get all appointments for a customer
app.get('/make-server-24861ad3/appointments/:customerId', async (c) => {
  try {
    const customerId = c.req.param('customerId');
    const appointments = await kv.getByPrefix(`appointment:${customerId}:`);
    
    return c.json({ 
      success: true, 
      appointments: appointments
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return c.json({ 
      success: false, 
      error: `Failed to fetch appointments: ${error}` 
    }, 500);
  }
});

// Create a new appointment
app.post('/make-server-24861ad3/appointments', async (c) => {
  try {
    const body = await c.req.json();
    const { customerId, customerName, vehicle, jobLines, mileage, measurement, date, timeSlot } = body;
    
    if (!customerId || !vehicle || !jobLines || !date || !timeSlot) {
      return c.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, 400);
    }

    const appointmentId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const appointment = {
      id: appointmentId,
      customerId,
      customerName,
      vehicle,
      jobLines,
      mileage,
      measurement,
      date,
      timeSlot,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    await kv.set(`appointment:${customerId}:${appointmentId}`, appointment);
    
    // Update appointment count
    const countKey = `appointmentCount:${customerId}`;
    const currentCount = await kv.get(countKey);
    const newCount = currentCount ? (currentCount as number) + 1 : 1;
    await kv.set(countKey, newCount);

    return c.json({ 
      success: true, 
      appointment,
      appointmentCount: newCount
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return c.json({ 
      success: false, 
      error: `Failed to create appointment: ${error}` 
    }, 500);
  }
});

// Get appointment count for a customer
app.get('/make-server-24861ad3/appointments/:customerId/count', async (c) => {
  try {
    const customerId = c.req.param('customerId');
    const countKey = `appointmentCount:${customerId}`;
    const result = await kv.get(countKey);
    
    return c.json({ 
      success: true, 
      count: result || 0 
    });
  } catch (error) {
    console.error('Error fetching appointment count:', error);
    return c.json({ 
      success: false, 
      error: `Failed to fetch appointment count: ${error}` 
    }, 500);
  }
});

// Update appointment status
app.patch('/make-server-24861ad3/appointments/:customerId/:appointmentId', async (c) => {
  try {
    const customerId = c.req.param('customerId');
    const appointmentId = c.req.param('appointmentId');
    const body = await c.req.json();
    const { status } = body;

    const key = `appointment:${customerId}:${appointmentId}`;
    const result = await kv.get(key);
    
    if (!result) {
      return c.json({ 
        success: false, 
        error: 'Appointment not found' 
      }, 404);
    }

    const appointment = { ...result as any, status, updatedAt: new Date().toISOString() };
    await kv.set(key, appointment);

    return c.json({ 
      success: true, 
      appointment 
    });
  } catch (error) {
    console.error('Error updating appointment:', error);
    return c.json({ 
      success: false, 
      error: `Failed to update appointment: ${error}` 
    }, 500);
  }
});

// Delete an appointment
app.delete('/make-server-24861ad3/appointments/:customerId/:appointmentId', async (c) => {
  try {
    const customerId = c.req.param('customerId');
    const appointmentId = c.req.param('appointmentId');
    const key = `appointment:${customerId}:${appointmentId}`;
    
    await kv.del(key);
    
    // Update count
    const countKey = `appointmentCount:${customerId}`;
    const currentCount = await kv.get(countKey);
    const newCount = currentCount ? Math.max(0, (currentCount as number) - 1) : 0;
    await kv.set(countKey, newCount);

    return c.json({ 
      success: true,
      appointmentCount: newCount
    });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return c.json({ 
      success: false, 
      error: `Failed to delete appointment: ${error}` 
    }, 500);
  }
});

Deno.serve(app.fetch);
