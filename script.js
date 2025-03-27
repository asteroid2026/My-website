
// Initialize download functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', handleDownload);
});

async function handleDownload() {
    try {
        const url = document.getElementById('video-url').value.trim();
        const quality = document.getElementById('quality-options').value;
        const format = document.getElementById('format-options').value;

        if (!url) {
            throw new Error('Please enter a YouTube video URL');
        }

        if (!/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(url)) {
            throw new Error('Please enter a valid YouTube URL');
        }

        const button = document.getElementById('download-btn');
        const originalText = button.textContent;
        button.disabled = true;
        button.textContent = 'Processing...';

        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log({
            url,
            quality,
            format,
            timestamp: new Date().toISOString()
        });

        alert('Download completed successfully!');
        button.disabled = false;
        button.textContent = originalText;

    } catch (error) {
        alert(error.message);
    }
});
