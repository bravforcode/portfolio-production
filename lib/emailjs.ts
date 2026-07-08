export const sendEmail = async (formData: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (!response.ok) throw new Error('Failed to send email')
    
    return { success: true }
  } catch (error) {
    console.error('Email send failed:', error)
    return { success: false, error }
  }
}