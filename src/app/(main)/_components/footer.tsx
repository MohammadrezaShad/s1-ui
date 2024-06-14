import React from 'react';
import {css} from '@styled/css';

const Footer: React.FC = () => (
  <footer className={css({bgColor: 'gray.100', pt: '8', pb: '8'})}>
    <div className={css({maxW: '7xl', ml: 'auto', mr: 'auto', pl: '4', pr: '4'})}>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1',
          md: {gridTemplateColumns: '4'},
          gap: '8',
        })}
      >
        <div>
          <h5 className={css({fontWeight: 'semibold', color: 'gray.700'})}>About</h5>
          <ul className={css({mt: '2', mb: '2', color: 'gray.600'})}>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                About Jelp
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Careers
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Press
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Investor Relations
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Trust & Safety
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Content Guidelines
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Accessibility Statement
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Ad Choices
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Your Privacy Choices
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={css({fontWeight: 'semibold', color: 'gray.700'})}>Discover</h5>
          <ul className={css({mt: '2', mb: '2', color: 'gray.600'})}>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp Project Cost Guides
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Collections
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Talk
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Events
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp Blog
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Support
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp Mobile
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Developers
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                RSS
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={css({fontWeight: 'semibold', color: 'gray.700'})}>Jelp for Business</h5>
          <ul className={css({mt: '2', mb: '2', color: 'gray.600'})}>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp for Business
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Business Owner Login
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Claim your Business Page
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Advertise on Jelp
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp for Restaurant Owners
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Table Management
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Business Success Stories
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Business Support
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp Blog for Business
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp Data for B2B
              </a>
            </li>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Jelp Data for B2C
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={css({fontWeight: 'semibold', color: 'gray.700'})}>Languages</h5>
          <ul className={css({mt: '2', mb: '2', color: 'gray.600'})}>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                English
              </a>
            </li>
          </ul>
          <h5 className={css({fontWeight: 'semibold', color: 'gray.700', mt: '6'})}>Cities</h5>
          <ul className={css({mt: '2', mb: '2', color: 'gray.600'})}>
            <li>
              <a href='/' className={css({_hover: {textDecorationLine: 'underline'}})}>
                Explore a City
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={css({
          mt: '8',
          color: 'gray.600',
          textAlign: 'center',
          fontSize: 'sm',
          lineHeight: 'sm',
        })}
      >
        <p>
          Copyright &copy; 2004–2024 Jelp Inc. Jelp,{' '}
          <span className={css({fontWeight: 'semibold'})}>Jelp</span> and related marks are
          registered trademarks of Jelp.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
