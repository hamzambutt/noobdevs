import XPWindow from './XPWindow';
import SiteContent from './SiteContent';

function BrowserWindow({ onClose }) {
  return (
    <div className="browser-window-container">
      <XPWindow 
        title="Internet Explorer - Noobdevs Technologies"
        icon="🌐"
        width="85%"
        height="calc(100vh - 76px)"
        position={{ top: '20px', left: '50%', transform: 'translateX(-50%)' }}
        onClose={onClose}
      >
        <SiteContent />
      </XPWindow>
    </div>
  );
}

export default BrowserWindow;
