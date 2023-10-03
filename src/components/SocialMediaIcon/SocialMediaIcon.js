import React from 'react';

export default function SocialMediaIcon({ id, name, url, icon, label }) {
  return (
    <div key={id}>
      <a href={url} target="_blank" rel="noreferrer" aria-label={label}>
        {icon}
        <br />
        {name}
      </a>
    </div>
  );
}
