import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import IT from './types/IT'
import Electronique from './types/Electronique'
import Mathematics from './types/Mathematics'
import Phisics from './types/Phisics'
import Mechanics from './types/Mechanics'
import Robotics from './types/Robotics'
import Automatic from './types/Automatic'
import Industrial from './types/Industrial'
import Energetics from './types/Energetics'
import Management from './types/Management'

const Books = () => {
  const [key, setKey] = useState('home');
  return (

    <div style={{ backgroundColor: 'beige', position: 'relative' }}>
      <div>

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 "
        >

          <Tab eventKey="home" title="IT">
            <IT />
          </Tab>
          <Tab eventKey="Electronique" title="Electronique">
            <Electronique />
          </Tab>
          <Tab eventKey="mathematics" title="Mathematics" >
            <Mathematics/>
          </Tab>
          <Tab eventKey="phisics" title="Phisics">
            <Phisics/>
          </Tab>
          <Tab eventKey="mechanics" title="Mechanics">
            <Mechanics />
          </Tab>
          <Tab eventKey="robotics" title="Robotics">
            <Robotics />
          </Tab>
          <Tab eventKey="automatic" title="Automatic">
            <Automatic />
          </Tab> <Tab eventKey="industrial " title="Industrial ">
            <Industrial />
          </Tab> <Tab eventKey="energetics" title="Energetics">
            <Energetics />
          </Tab>
          <Tab eventKey="management" title="Management">
            <Management />
          </Tab>

        </Tabs>

      </div>

    </div >
  )
}

export default Books
