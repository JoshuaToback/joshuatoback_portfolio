import React from 'react';

import Resume from "../files/JoshuaToback_Resume.pdf"

const DownloadButton = () => {
  const handleDownload = () => {
    // Create a dummy file to download
    const fileContent = {Resume};
    const fileName = 'Resume';
    const fileBlob = new Blob([fileContent], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(fileBlob);

    // Create a link element and click it programmatically to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();

    // Cleanup the URL and link
    URL.revokeObjectURL(fileUrl);
    link.remove();
  };

  return (
    <button onClick={handleDownload}>
      DOWNLOAD RESUME
    </button>
  );
};

export default DownloadButton;
