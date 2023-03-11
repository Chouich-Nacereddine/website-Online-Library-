import React , { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import IT from '../review/IT'
import Electronique from '../review/Electronique'
import Mathematics from '../review/Mathematics'
import Phisics from '../review/Phisics'
import Mechanics from '../review/Mechanics'
import Robotics from '../review/Robotics'
import Automatic from '../review/Automatic'
import Industrial from '../review/Industrial'
import Energetics from '../review/Energetics'
import Management from '../review/Management'

const Admin = () => {
    const [key, setKey] = useState('home');
  return (
    <div>
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
    </div>
  )
}

export default Admin
