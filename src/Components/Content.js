import "../Css/Content.css";
import Rocket from "../Images/Untitled-removebg-preview.png";
import Card from "react-bootstrap/Card";
import StackDev from "../Images/StackDev.png";

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
                kamu setelah kamu lulus. Oleh karena itu kami juga membimbing
                kamu menyusun skripsi , jurnal hingga sampai kamu lulus.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* card content 2 */}
          <div className="card-content2">
            <Card
              style={{
                width: "12rem",
                backgroundColor: "#749BC2",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={StackDev}
                className="card-content2-img"
              />
              <Card.Body>
                <Card.Text>100% Mahasiswa Sampai Lulus</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "12rem",
                backgroundColor: "#749BC2",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={StackDev}
                className="card-content2-img"
              />
              <Card.Body>
                <Card.Text>Mahasiswa sampai Tepat Waktu</Card.Text>
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
      {/* paragraf 3 */}
      <div className="paragraf-content3">
        <h3>Proses kerja Kami</h3>
      </div>
      <div className="wrapper-content3">
        <div className="card-content3">
          <Card style={{ width: "23rem", backgroundColor: "white" }}>
            <Card.Body>
              <Card.Title>1. Pilih Judul Anda</Card.Title>
              <Card.Text style={{ marginTop: "20px" }}>
                Anda memulai dengan memilih layanan sesuai dengan target anda.
                Kemudian menganalisis dokumen anda untuk memastikan bahwa kami
                merekomendasikan rencana terbaik untuk dipilih. Anda dapat
                memilih waktu dan opsi harga yang sesuai untuk kebutuhan.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "23rem", backgroundColor: "white" }}>
            <Card.Body>
              <Card.Title>2. Proses Pengerjaan</Card.Title>
              <Card.Text style={{ marginTop: "20px" }}>
                Kami akan memilih penulis paling cocok berdasarkan bidang anda.
                Anda atau preferensi sebelumnya mengedit skripsi anda,
                memastikan persyaratan kualitas dan pedoman sesuai anda
                terpenuhi. Peninjau asli dan kontrol kualitas kami memastikan
                bahwa pedoman kualitas dengan standar akademis terpenuhi.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "23rem", backgroundColor: "white" }}>
            <Card.Body>
              <Card.Title>3. Ambil Skripsi Anda</Card.Title>
              <Card.Text style={{ marginTop: "20px" }}>
                Ajukan pertanyaan tanpa batas kepada tim kami sampai Anda puas
                atau mendapatkan klarifikasi dari tim layanan pelanggan kami.
                Berdasarkan rencana anda, anda dapat berkolaborasi untuk
                beberapa pengeditan ulang sesuai masukan rekan atau jurnal.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="paragraf-text3">
          Anda bisa mencoba menulis skripsi anda dan berjuang dengan sesuatu
          yang baru dan sulit bagi anda, atau anda bisa mendapatkan skripsi yang
          anda butuhkan dari tim kami. Kami sangat mengerti betapa sulitnya
          menulis skripsi dan penulis skripsi dengan adanya kami siap membantu
          anda. Biarkan layanan penulisan skripsi kami membantu anda dalam
          menyusun skripsi anda.
        </div>
        <div className="wrapper-btn3">
          <button className="paragraf-btn3">Hubungi Kami</button>
        </div>
      </div>
      {/* end paragraf */}
      <div className="paragraf-content4">
        <div className="card-content4">
          <Card style={{ width: "35rem", backgroundColor: "white", display: "flex" }}>
            <Card.Body>
              <Card.Title> 
                <img src={StackDev} alt="StackDev Team" style={{ width: "50px", height: "auto"}} />
                StackDev Team</Card.Title>
              <Card.Text>
                Merupakan tim yang terdiri dari berbagai ahli berpengalaman dalam
                bidang jasa pembuatan skripsi dan jurnal. Kami akan memberikan layanan
                konsultasi dan senantiasa membimbing anda selama proses penyusunan
                skripsi dan jurnal agar hasil yang dihasilkan sesuai dengan yang anda
                harapkan
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "35rem", backgroundColor: "white" }}>
            <Card.Body>
              <Card.Title>HUBUNGI KAMI</Card.Title>
              <Card.Text style={{ marginTop: "20px" }}>
                Jalan Mampang Prapatan XI No. 5 Mampang Tegal Parang Jakarta
                Selatan Hp : 082246456624
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Content;
