import React from 'react';

import './index.css';

import LocationArchiveItem from '../LocationArchiveItem';

export default ({locations}) => {
  const locationLocationArchiveItems = locations.map((location) => {
    return <LocationArchiveItem {...location} key={location.id} />;
  });

  // Add empty flex box items to ensure the last row left-aligns itself
  locationLocationArchiveItems.push(<div className="empty-archive-item" key="empty-1" />);
  locationLocationArchiveItems.push(<div className="empty-archive-item" key="empty-2" />);
  locationLocationArchiveItems.push(<div className="empty-archive-item" key="empty-3" />);
  locationLocationArchiveItems.push(<div className="empty-archive-item" key="empty-4" />);
  locationLocationArchiveItems.push(<div className="empty-archive-item" key="empty-5" />);

  return <div className="archive">{locationLocationArchiveItems}</div>;
};
