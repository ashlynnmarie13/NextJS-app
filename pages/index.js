import Link from "next/link";

const Index = () => (
  <div>
    <div className="box">
      <div className="text">Our First NextJS App</div>

      <div className="title">Which DM-15 Student are YOU?</div>
      <Link prefetch href="/first">
        <a className="button">Start</a>
      </Link>
      <div className="footer">Presented by Ashlynn & Jonathan</div>
    </div>
    <div className="overlay" />

    <div className="background" />
    <style jsx>{`
      .background {
        background-image: url(https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940);
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        background-size: cover;
        margin: 0 auto;
        z-index: -100;
      }
      .overlay {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        background-size: cover;
        margin: 0 auto;
        z-index: -100;
        background-color: white;
        opacity: 0.8;
        z-index: -90;
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 1000px;
      }
      .text {
        font-family: Roboto, sans-serif;
        font-size: 4em;
        color: #0b0c10;
        z-index: 0.9;
      }
      .footer {
        font-family: Roboto, sans-serif;
        font-size: 2em;
        color: #0b0c10;
        z-index: 0.9;
      }
      .title {
        font-family: Roboto, sans-serif;
        font-size: 6em;
        color: #45a29e;
        z-index: 0.9;
      }
      .button {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 200px;
        border: none;
        height: 100px;
        border-radius: 30px;
        margin-right: 5px;
        margin-left: 5px;
        font-family: Roboto, sans-serif;
        font-size: 2.5em;
        color: #0b0c10;
        text-decoration: none;
        border: solid 1px #45a293;
        background-color: c5c6c7;
      }
    `}</style>
  </div>
);

export default Index;

// import Link from "next/link";

// const Index = () => (
//   <div>
//     <div>Our First NextJS App</div>
//     <div>Presented by Ashlynn & Jonathan</div>
//     <Link prefetch href="/first">
//       <a>Start</a>
//     </Link>
//   </div>
// );

// export default Index;
