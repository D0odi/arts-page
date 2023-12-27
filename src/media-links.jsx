import { FaTelegramPlane } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <a href="https://www.google.com" aria-label="Google" style={{ marginRight: '10px', fontSize: '1.5em' }}>
        <FaTelegramPlane />
      </a>
    </div>
  );
}

export default SocialLinks;

