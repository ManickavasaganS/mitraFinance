import { useState } from 'react';

const EnquiryForm = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formKey = import.meta.env.VITE_FORMBEEP_API_KEY;

    if (!formKey || formKey === 'your_formbeep_api_key_here') {
      setStatus('FormBeep API Key is not configured. Please add it to your .env file.');
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus('');
      
      const response = await fetch(`https://app.formbeep.com/cg/${formKey}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('Success! We will get back to you soon.');
        form.reset();
      } else {
        setStatus('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="enquiry-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '0 auto', background: 'var(--white)', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2)', border: '1px solid var(--gray-100)', color: 'var(--text-main)' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.75rem', color: 'var(--navy)' }}>Get a Free Callback</h3>
      <p style={{ textAlign: 'center', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Fill out the form below and our team will contact you shortly.</p>
      
      <div>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Full Name</label>
        <input type="text" id="name" name="name" required style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--gray-200)', outline: 'none', transition: 'var(--transition)', fontSize: '1rem' }} />
      </div>
      
      <div>
        <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Phone Number</label>
        <input type="tel" id="phone" name="phone" required style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--gray-200)', outline: 'none', transition: 'var(--transition)', fontSize: '1rem' }} />
      </div>
      
      <div>
        <label htmlFor="loanType" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Loan Type</label>
        <select id="loanType" name="loanType" required style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--gray-200)', outline: 'none', backgroundColor: 'var(--white)', transition: 'var(--transition)', fontSize: '1rem' }}>
          <option value="">Select a loan type</option>
          <option value="Personal Loan">Personal Loan</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Mortgage Loan">Mortgage Loan</option>
          <option value="OD / CC Facility">OD / CC Facility</option>
          <option value="Purchase Loan">Purchase Loan</option>
          <option value="Vehicle Loan">Vehicle Loan</option>
          <option value="Agri Loan">Agri Loan</option>
        </select>
      </div>
      
      <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
      </button>
      
      {status && (
        <div style={{ padding: '1rem', borderRadius: '8px', marginTop: '1rem', textAlign: 'center', backgroundColor: status.includes('Success') ? '#dcfce7' : '#fee2e2', color: status.includes('Success') ? '#166534' : '#991b1b', fontWeight: 500 }}>
          {status}
        </div>
      )}
    </form>
  );
};

export default EnquiryForm;
