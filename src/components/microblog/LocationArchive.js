import React from 'react';

import './LocationArchive.css';

import LocationArchiveItem from './LocationArchiveItem';

import posts from './resources/posts.json';


const LocationArchive = () => {
  const locationLocationArchiveItems = posts.locationsVisitOrder.map((locationId) => {
    return <LocationArchiveItem locationId={locationId} key={locationId} />;
  });

  // Add empty flex box items to ensure the last row left-aligns itself
  locationLocationArchiveItems.push(<div className='empty-archive-item' key='empty-1' />);
  locationLocationArchiveItems.push(<div className='empty-archive-item' key='empty-2' />);
  locationLocationArchiveItems.push(<div className='empty-archive-item' key='empty-3' />);
  locationLocationArchiveItems.push(<div className='empty-archive-item' key='empty-4' />);
  locationLocationArchiveItems.push(<div className='empty-archive-item' key='empty-5' />);

  return (
    <div className='archive'>
      {locationLocationArchiveItems}
    </div>
  );
};

export default LocationArchive;
