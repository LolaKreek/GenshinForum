import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import "./../../styles/footer.css";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <a className='footer-link' href='https://genshin.hoyoverse.com/ru/character/inazuma?char=11'>How it works</a>
            <a className='footer-link' href='https://www.pcgamer.com/genshin-impact-review/'>Testimonials</a>
            <a className='footer-link' href='https://careers.mihoyo.com/#/'>Careers</a>
            <a className='footer-link' href='https://www.crunchbase.com/organization/mihoyo'>Investors</a>
            <a className='footer-link' href='https://genshinimpact-store.com/term-of-service/'>Terms of Service</a>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <a className='footer-link' href='https://www.hoyoverse.com/en-us/about-us?utm_source=genshin&utm_medium=footer'>Contact</a>
            <a className='footer-link' href='https://gamingonphone.com/guides/how-to-contact-the-genshin-impact-customer-support-to-fix-an-issue/'>Support</a>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <a className='footer-link' href='https://www.instagram.com/genshinimpact/'>Instagram</a>
            <a className='footer-link' href='https://www.facebook.com/Genshinimpact/?brand_redir=2358272267741418'>Facebook</a>
            <a className='footer-link' href='https://www.youtube.com/c/GenshinImpact'>Youtube</a>
            <a className='footer-link' href='https://twitter.com/RUGenshinimpact'>Twitter</a>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Genshin Impact
          </SocialLogo>
          <WebsiteRights>Volha Zinkevich & Lalita Klimchuk © 2023</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/Genshinimpact/?brand_redir=2358272267741418' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/genshinimpact/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.youtube.com/c/GenshinImpact'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com/RUGenshinimpact' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.hoyolab.com/home?utm_source=officialweb&utm_medium=game&utm_id=2' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;