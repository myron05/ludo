

const Home = () => {
  return (

    <>
   
    {/* stylesheet */}
    <link rel="stylesheet" href="https://ludonft.io/assets/css/stylepe.css" />
    {/* responsive */}
    <link rel="stylesheet" href="https://ludonft.io/assets/css/responsive.css" />
    
    <section id="banner-section" style={{}}>
      <div className="banner-content d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="top-area justify-content-center text-center">
                 
                  <h1
                    style={{
                      fontFamily: "Oswald",
                      fontWeight: 700,
                      fontSize: "5em"
                    }}
                  >
                    
                  </h1>
                  <p>
                   
                  </p>
                  <div className="btn-play d-flex justify-content-center align-items-center">
                    <a
                      href="https://ludo-nft-1.gitbook.io/whitepaper/"
                      className="cmn-btn"
                    >
                      
                    </a>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="bottom-area text-center">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ani-illu">
            <img
              className="left-1 wow fadeInUp"
              src="https:/ludonft.io/images/left-banner.png"
              alt="image"
            />
           
          </div>
        </div>
      </div>
    </section>
  </>
  


  );
};

export default Home;
