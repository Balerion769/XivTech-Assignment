
import './App.css';
import Card from './Card';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <div style={{
          display: 'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          
        }}>
     <Navbar></Navbar>
     <Card text3="AI + RPA is what we do"
text="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" text2="AI + RPA Automation" srcs2="https://www.xivtech.io./services/AIandRPAautomation"  srcs="https://www.xivtech.io./rp2.jpg"></Card>
     <Card text3="Make Bolder Choices"
text="Digital focused strategies to realize market-changing ideas" text2="Build Better Apps"srcs2="https://www.xivtech.io./services/enterprise-apps" srcs="https://www.xivtech.io./p1.png"></Card>
     <Card text3="Innovate with Speed"
text="Create higher quality software, deliver on customer expectations and business goals" text2="DevOps" srcs2="https://www.xivtech.io./services/delivery-pipeline-automation" srcs="https://www.xivtech.io./p2.jpg"></Card>
     <Card text3="Embrace Cloud"
text="With Cloud-First accelerate innovation and optimize performance" text2 ="Cloud Services" srcs2="https://www.xivtech.io./services/cloud" srcs="https://www.xivtech.io./p3.jpg"></Card>
     </div>
    </>
  );
}

export default App;
