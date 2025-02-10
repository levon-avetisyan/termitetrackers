import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.tsx'; // Adjust the import path as necessary

const loaderStyle: React.CSSProperties = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(0 0 0 / 72%)',
  zIndex: 9999,
};

const Loader: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.global.loading);

  if (!isLoading) return null;

  return (
    <div className="loader" style={loaderStyle}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loader;
