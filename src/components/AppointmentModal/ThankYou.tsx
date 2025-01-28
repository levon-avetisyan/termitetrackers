interface IProps {
  closeModal: () => void;
}

const ThankYou: React.FC<IProps> = ({ closeModal }) => {
  return (
    <div className="thank-you">
      <h4>Thank you.</h4>
      <p>Our specialist will contact you shortly.</p>
      <p className="text-muted">
        Leave a review{' '}
        <b>
          <a href="/review">here.</a>
        </b>
      </p>
      <button type="submit" className="btn-custom-form mt-4" onClick={closeModal}>
        Close
      </button>
    </div>
  );
};

export default ThankYou;
