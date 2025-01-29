import React, { useEffect } from 'react';

const GetQuoteForm: React.FC = () => {
  useEffect(() => {
    // Dynamically load the external script after the component mounts
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/2cvt6lowT5Qb7UVOiSOy"
      style={{
        width: '500px',
        height: '100%',
        border: 'none',
        borderRadius: '3px',
        background: 'none',
        margin: '0 auto'
      }}
      id="inline-2cvt6lowT5Qb7UVOiSOy"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Termite Trackers: Get Quote"
      data-height="754"
      data-layout-iframe-id="inline-2cvt6lowT5Qb7UVOiSOy"
      data-form-id="2cvt6lowT5Qb7UVOiSOy"
      title="Termite Trackers: Get Quote"
    ></iframe>
  );
};

export default GetQuoteForm;
