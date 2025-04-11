import { useState } from 'react';
import './App.css';

function App() {
  const [selectedMedia, setSelectedMedia] = useState('text');
  const [text, setText] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Media Content Creator</h1>
      </header>
      <main className="main-content">
        <div className="columns-container">
          <div 
            className={`media-column ${selectedMedia === 'text' ? 'selected' : ''}`}
            onClick={() => setSelectedMedia('text')}
          >
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h2>Text</h2>
            <p>Create and format text content</p>
          </div>
          <div 
            className={`media-column ${selectedMedia === 'video' ? 'selected' : ''}`}
            onClick={() => setSelectedMedia('video')}
          >
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
              </svg>
            </div>
            <h2>Video</h2>
            <p>Add and embed video content</p>
          </div>

          <div 
            className={`media-column ${selectedMedia === 'audio' ? 'selected' : ''}`}
            onClick={() => setSelectedMedia('audio')}
          >
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
              </svg>
            </div>
            <h2>Audio</h2>
            <p>Add and play audio content</p>
          </div>
        </div>

        <div className="content-area">
          {selectedMedia === 'text' && (
            <div>
              <h3>Text Editor</h3>
              <textarea
                className="text-input"
                placeholder="Type your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          )}
          
          {selectedMedia === 'video' && (
            <div>
              <h3>Video Embed</h3>
              <input
                type="text"
                className="url-input"
                placeholder="Enter video URL..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
              {videoUrl && (
                <div className="video-preview">
                  <div className="video-placeholder">
                    <div className="placeholder-text">Video Preview</div>
                    <p>URL: {videoUrl}</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {selectedMedia === 'audio' && (
            <div>
              <h3>Audio Player</h3>
              <input
                type="text"
                className="url-input"
                placeholder="Enter audio URL..."
                value={audioUrl}
                onChange={(e) => setAudioUrl(e.target.value)}
              />
              {audioUrl && (
                <div className="audio-player">
                  <div className="audio-controls">
                    <button className="play-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                    <div className="progress-bar">
                      <div className="progress-filled"></div>
                    </div>
                    <span className="time-display">0:30 / 1:30</span>
                  </div>
                  <p className="audio-url">Audio URL: {audioUrl}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;