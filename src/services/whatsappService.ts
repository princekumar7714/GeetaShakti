interface WhatsAppMessage {
  phone: string;
  message: string;
}

class WhatsAppService {
  private readonly whatsappNumber = "+918114222222";

  /**
   * Send form submission to WhatsApp
   */
  async sendFormSubmission(data: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
    formType: string;
    additionalData?: Record<string, any>;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const whatsappMessage = this.formatWhatsAppMessage(data);
      
      // Create WhatsApp URL
      const whatsappUrl = this.createWhatsAppUrl(this.whatsappNumber, whatsappMessage);
      
      // Open WhatsApp (in production, you might want to use WhatsApp Business API)
      this.openWhatsApp(whatsappUrl);
      
      // Store submission for record keeping
      this.storeWhatsAppSubmission(data, whatsappMessage);
      
      return {
        success: true,
        message: 'Form submitted successfully! Message sent to WhatsApp.'
      };
    } catch (error) {
      console.error('WhatsApp sending failed:', error);
      return {
        success: false,
        message: 'Failed to send WhatsApp message. Please try again.'
      };
    }
  }

  /**
   * Format form data into WhatsApp message
   */
  private formatWhatsAppMessage(data: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
    formType: string;
    additionalData?: Record<string, any>;
  }): string {
    let message = `🔔 *New ${data.formType} Submission*\n\n`;
    message += `📝 *Form Type:* ${data.formType}\n`;
    message += `👤 *Name:* ${data.name}\n`;
    message += `📧 *Email:* ${data.email}\n`;
    
    if (data.phone) {
      message += `📱 *Phone:* ${data.phone}\n`;
    }
    
    if (data.message) {
      message += `💬 *Message:* ${data.message}\n`;
    }
    
    message += `\n📋 *Additional Information:*\n`;
    
    // Add additional data if present
    if (data.additionalData) {
      Object.entries(data.additionalData).forEach(([key, value]) => {
        if (value && value !== '') {
          message += `• *${key}:* ${value}\n`;
        }
      });
    }
    
    message += `\n⏰ *Submitted on:* ${new Date().toLocaleString()}\n`;
    message += `\n🌐 *Submitted from:* Geeta Shakti Website`;
    
    return encodeURIComponent(message);
  }

  /**
   * Create WhatsApp URL
   */
  private createWhatsAppUrl(phone: string, message: string): string {
    return `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${message}`;
  }

  /**
   * Open WhatsApp with redirect
   */
  private openWhatsApp(url: string): void {
    window.location.href = url;
  }

  /**
   * Store WhatsApp submission in localStorage for record keeping
   */
  private storeWhatsAppSubmission(data: any, message: string): void {
    const submissions = JSON.parse(localStorage.getItem('whatsappSubmissions') || '[]');
    
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      formData: data,
      message: message,
      status: 'sent',
      recipient: this.whatsappNumber
    };

    submissions.push(submission);
    localStorage.setItem('whatsappSubmissions', JSON.stringify(submissions));
  }

  /**
   * Get all stored WhatsApp submissions (for admin viewing)
   */
  getStoredSubmissions(): any[] {
    return JSON.parse(localStorage.getItem('whatsappSubmissions') || '[]');
  }

  /**
   * Send quick WhatsApp message for inquiries
   */
  sendQuickMessage(message: string): void {
    const whatsappUrl = this.createWhatsAppUrl(this.whatsappNumber, encodeURIComponent(message));
    this.openWhatsApp(whatsappUrl);
  }
}

export const whatsappService = new WhatsAppService();
