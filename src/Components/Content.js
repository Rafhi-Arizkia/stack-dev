import "../Css/Content.css";
import Rocket from "../Images/Untitled-removebg-preview.png";
import Card from "react-bootstrap/Card";
import StackDev from '../Images/StackDev.png'
import { Button } from "bootstrap";

const Content = () => {
  return (
    <>
      {/* Paragraf1 */}
      <div className="wrapper">
        <div className="paragraf">
          Selamat Datang di Website Kami
          <br />
          <h3>Skripsi, Tugas Akhir & Jurnal</h3>
          Tetap semangat, jangan pernah berputus asa!
          <br />
          <button className="paragraf-btn">Ya, Siap untuk Skripsi</button>
        </div>
        {/* Gambar 1 */}
        <div className="paragraf-img">
          <img src={Rocket} alt="rocket" className="rocket-img" />
        </div>
      </div>
      {/* end of paragraf 1 */}

      {/* Paragraf 2 */}
      <div className="paragraf-content2">
        Halo! Kami Siap Membantu Membuat Skripsi
        <br />
        Sampai Anda Lulus
      </div>
      {/* card content 1 */}
      <div className="card-content1">
        <div className="wrapper-content">
          <Card style={{ width: "30rem", backgroundColor: "#749BC2" }}>
            <Card.Body>
              <Card.Text>
                Kami tidak ingin kamu hanya diam saja dan terima bersih Skripsi
                ataupun Jurnal. Kami ingin kamu juga memiliki skill dan
                pengetahuan yang mampu hingga bisa diandalkan oleh tempat kerja
                kamu setelah kamu lulus. Oleh karena itu kami juga membimbing kamu
                menyusun skripsi , jurnal hingga sampai kamu lulus.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* card content 2 */}
          <div className="card-content2">
            <Card style={{ width: '12rem', backgroundColor: "#749BC2", textAlign: 'center' }}>
              <Card.Img variant="top" src={StackDev} className="card-content2-img" />
              <Card.Body>
                <Card.Text>
                  100% Mahasiswa Sampai Lulus
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '12rem', backgroundColor: "#749BC2", textAlign: 'center' }}>
              <Card.Img variant="top" src={StackDev} className="card-content2-img" />
              <Card.Body>
                <Card.Text>
                  Mahasiswa sampai Tepat Waktu
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="btn-wrapper">
              <button className="btn-card">Lihat Paket</button>
            </div>
        </div>
        {/* Gambar 2 */}
        <div className="paragraf-img2">
          <img src={Rocket} alt="rocket" className="rocket-img2" />
        </div>
      </div>
    </>
  );
};

export default Content;
