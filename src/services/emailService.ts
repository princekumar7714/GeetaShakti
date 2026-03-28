interface EmailData {
  to: string;
  subject: string;
  body: string;
  from?: string;
  formType: string;
}

interface FormSubmissionData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  formType: string;
  additionalData?: Record<string, any>;
}

class EmailService {
  private readonly recipientEmail = "contactus@geetashakti.org";

  /**
   * Send form submission email
   */
  async sendFormSubmission(data: FormSubmissionData): Promise<{ success: boolean; message: string }> {
    try {
      const emailData = this.formatEmailData(data);
      
      // In a real application, you would integrate with an email service like:
      // - EmailJS
      // - SendGrid
      // - AWS SES
      // - Firebase Functions
      // - Backend API endpoint
      
      // For now, we'll simulate the email sending and store in localStorage
      const result = await this.simulateEmailSending(emailData);
      
      // Store submission for record keeping
      this.storeSubmission(data, emailData);
      
      return result;
    } catch (error) {
      console.error('Email sending failed:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.'
      };
    }
  }

  /**
   * Format form data into email content
   */
  private formatEmailData(data: FormSubmissionData): EmailData {
    const subject = `New ${data.formType} Submission from ${data.name}`;
    
    let body = `
      <h2>New Form Submission</h2>
      <p><strong>Form Type:</strong> ${data.formType}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
      
      <h3>Additional Information:</h3>
      <ul>
    `;

    // Add additional data if present
    if (data.additionalData) {
      Object.entries(data.additionalData).forEach(([key, value]) => {
        if (value && value !== '') {
          body += `<li><strong>${key}:</strong> ${value}</li>`;
        }
      });
    }

    body += `
      </ul>
      
      <hr>
      <p><em>This email was sent from the Geeta Shakti website contact form.</em></p>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `;

    return {
      to: this.recipientEmail,
      subject,
      body,
      from: data.email,
      formType: data.formType
    };
  }

  /**
   * Simulate email sending (in production, replace with actual email service)
   */
  private async simulateEmailSending(emailData: EmailData): Promise<{ success: boolean; message: string }> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In production, this would be an actual API call to your email service
    console.log('Email would be sent to:', emailData.to);
    console.log('Subject:', emailData.subject);
    console.log('Body:', emailData.body);

    // Simulate success (in production, handle actual success/failure)
    return {
      success: true,
      message: 'Your submission has been sent successfully! We will contact you soon.'
    };
  }

  /**
   * Store submission in localStorage for record keeping
   */
  private storeSubmission(data: FormSubmissionData, emailData: EmailData): void {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      formData: data,
      emailData: emailData,
      status: 'sent'
    };

    submissions.push(submission);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
  }

  /**
   * Get all stored submissions (for admin viewing)
   */
  getStoredSubmissions(): any[] {
    return JSON.parse(localStorage.getItem('formSubmissions') || '[]');
  }

  /**
   * Send donation confirmation email
   */
  async sendDonationConfirmation(data: FormSubmissionData): Promise<{ success: boolean; message: string }> {
    const confirmationData: EmailData = {
      to: data.email,
      subject: 'Thank You for Your Donation - Geeta Shakti',
      body: `
        <h2>Thank You for Your Donation!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your donation submission and we are truly grateful for your support.</p>
        <p><strong>Reference ID:</strong> ${Date.now()}</p>
        <p>Our team will review your submission and contact you within 24-48 hours.</p>
        
        <h3>Next Steps:</h3>
        <ul>
          <li>Our team will review your submission</li>
          <li>You will receive a confirmation call/email</li>
          <li>We will guide you through the next steps</li>
        </ul>
        
        <p>If you have any questions, please contact us at:</p>
        <p>📞 +91 8114222222</p>
        <p>📧 contactus@geetashakti.org</p>
        
        <hr>
        <p><em>With gratitude,</em></p>
        <p><strong>Team Geeta Shakti</strong></p>
        <p><small>Geeta Shakti Cancer Care Foundation</small></p>
      `,
      formType: 'donation-confirmation'
    };

    return this.simulateEmailSending(confirmationData);
  }

  /**
   * Send volunteer application confirmation
   */
  async sendVolunteerConfirmation(data: FormSubmissionData): Promise<{ success: boolean; message: string }> {
    const confirmationData: EmailData = {
      to: data.email,
      subject: 'Volunteer Application Received - Geeta Shakti',
      body: `
        <h2>Thank You for Your Interest in Volunteering!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your volunteer application and are excited about your interest in supporting our cause.</p>
        <p><strong>Application ID:</strong> ${Date.now()}</p>
        <p>Our volunteer coordinator will review your application and contact you within 3-5 business days.</p>
        
        <h3>What Happens Next:</h3>
        <ul>
          <li>Application review by our team</li>
          <li>Initial phone screening</li>
          <li>Orientation session invitation</li>
          <li>Onboarding and training</li>
        </ul>
        
        <p>If you have any questions, please contact us at:</p>
        <p>📞 +91 8114222222</p>
        <p>📧 volunteers@geetashakti.org</p>
        
        <hr>
        <p><em>Looking forward to working with you!</em></p>
        <p><strong>Team Geeta Shakti</strong></p>
        <p><small>Geeta Shakti Cancer Care Foundation</small></p>
      `,
      formType: 'volunteer-confirmation'
    };

    return this.simulateEmailSending(confirmationData);
  }
}

export const emailService = new EmailService();
