import "../Css/Content.css";
import Rocket from "../Images/Untitled-removebg-preview.png";
import Card from "react-bootstrap/Card";

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
      {/* Paragraf 2 */}
      <div className="paragraf-content2">
        Halo! Kami Siap Membantu Membuat Skripsi
        <br />
        Sampai Anda Lulus
      </div>
      {/* card content 1 */}
      <div className="card-content1">
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
        {/* Gambar 2 */}
        <div className="paragraf-img2">
          <img src={Rocket} alt="rocket" className="rocket-img2" />
        </div>
      </div>
      {/* card content 2 */}
      <div className="card-content2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/70px180" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Content;
