import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
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
              <Link to="docs/Fabrication##Enclosure">Check the Enclosure section.</Link>            </div>
          </div>       
        </div>
        <div className="col col--4"></div>
      </div>
    </Layout>
  );
}

export default Hello;

