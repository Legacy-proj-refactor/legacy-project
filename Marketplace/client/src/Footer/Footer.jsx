import React from 'react';
import { Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer>
    <Container
      maxWidth="lg"
      style={{
        width: '120%',
        height: '250px',
        paddingTop: '100px',
        paddingBottom: '24px',
        background: 'black',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '60px',
        display: 'flex',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Grid container justifyContent="center" alignItems="flex-start" spacing={8}>
        {/* Section 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ color: '#fafafa', fontSize: '24px', fontWeight: 700, lineHeight: '24px' }}>
            Exclusive
          </div>
          <div style={{ color: '#fafafa', fontSize: '20px', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>
            Subscribe
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            Get 10% off your first order
          </div>
          <div
            style={{
              width: '217px',
              paddingTop: '12px',
              paddingBottom: '12px',
              paddingLeft: '16px',
              borderRadius: '4px',
              border: '1.5px #fafafa solid',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '32px',
              display: 'flex',
            }}
          >
            <div
              style={{
                opacity: '0.4',
                color: '#fafafa',
                fontSize: '16px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Enter your email
            </div>
            <div style={{ width: '24px', height: '24px', position: 'relative' }}>
              <div
                style={{
                  width: '20px',
                  height: '18px',
                  left: '2px',
                  top: '3px',
                  position: 'absolute',
                  border: '1.5px #fafafa solid',
                }}
              ></div>
            </div>
          </div>
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ color: '#fafafa', fontSize: '20px', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>
            Support
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            exclusive@gmail.com
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            +88015-88888-9999
          </div>
        </Grid>

        {/* Section 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ color: '#fafafa', fontSize: '20px', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>
            Account
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            My Account
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            Login / Register
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            Cart
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            Wishlist
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            Shop
          </div>
        </Grid>

        {/* Section 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ color: '#fafafa', fontSize: '20px', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>
            Download App
          </div>
          <div style={{ color: '#fafafa', fontSize: '16px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px' }}>
            Save $3 with App New User Only
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '80px', height: '80px', padding: '2px', background: 'black', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <img
                style={{ width: '76px', height: '76px', border: '2.5px white solid' }}
                src="https://via.placeholder.com/76x76"
                alt="App Icon"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px' }}>
              <img
                style={{ width: '104px', height: '30px', borderRadius: '4px', border: '0.6px #fafafa solid' }}
                src="https://via.placeholder.com/104x30"
                alt="Download on the App Store"
              />
              <img
                style={{ width: '104px', height: '34px', borderRadius: '4px', border: '0.6px white solid' }}
                src="https://via.placeholder.com/104x34"
                alt="Get it on Google Play"
              />
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <div style={{ opacity: 0.4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
        <div style={{ width: '1440px', height: '0px', opacity: 0.4, border: '1px white solid' }}></div>
        <div style={{ opacity: 0.6, justifyContent: 'flex-start', alignItems: 'center', gap: '12px', display: 'flex' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                padding: '1.67px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: '16.67px',
                  height: '16.67px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '16.67px',
                    height: '16.67px',
                    left: '0px',
                    top: '0px',
                    position: 'absolute',
                    border: '1.5px white solid',
                  }}
                ></div>
                <div
                  style={{
                    width: '5.83px',
                    height: '6.67px',
                    left: '5px',
                    top: '5px',
                    position: 'absolute',
                    border: '1.5px white solid',
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
    </Container></footer>
  );
};

export default Footer;
