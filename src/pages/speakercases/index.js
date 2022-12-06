import React from 'react';
import Layout from '@theme/Layout';
import WatchCase from './WatchCase';
import WatchCaseSTL from './WatchCaseSTL';

function Hello() {
  return (
    <Layout title="Speaker Cases">
      <div className="row">
        <div className="col col--4"></div>
        <div className="col col--7">
          <div className="row">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <WatchCaseSTL path="3D-Files/Main-Enclosure.stl" title="Original" />
              <p>This is a description of the watch case shown above.</p>
            </div>
          </div>       
        </div>
        <div className="col col--4"></div>
      </div>
    </Layout>
  );
}

export default Hello;
