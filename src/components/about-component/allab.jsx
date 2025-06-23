import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Flone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo consequat irure{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;

import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/banner-one.json";
import BannerOneSingle from "../../components/banner/BannerOneSingle.js";

const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {bannerData?.map((single, key) => (
            <div className="col-lg-4 col-md-4" key={key}>
              <BannerOneSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerOne;

import PropTypes from "prop-types";
import clsx from "clsx";
import textGridData from "../../data/text-grid/text-grid-one.json";
import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";

const TextGridOne = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("about-mission-area", spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {textGridData?.map((single, key) => (
              <div className="col-lg-4 col-md-4" key={key}>
                <TextGridOneSingle
                  data={single}
                  spaceBottomClass="mb-30"
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default TextGridOne;
import PropTypes from "prop-types";
import clsx from "clsx";
import funFactData from "../../data/fun-fact/fun-fact-one.json";
import FunFactOneSingle from "../../components/fun-fact/FunFactOneSingle.js";

const FunFactOne = ({ spaceTopClass, spaceBottomClass, bgClass }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass, bgClass)}>
      <div className="container">
        <div className="row">
          {funFactData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <FunFactOneSingle
                data={single}
                spaceBottomClass="mb-30"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FunFactOne.propTypes = {
  bgClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FunFactOne;
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import teamMemberData from "../../data/team-members/team-member-one.json";
import TeamMemberOneSingle from "../../components/team-member/TeamMemberOneSingle";

const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("team-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        {/* section title */}
        <SectionTitleTwo
          titleText="Team Members"
          subTitleText="Lorem ipsum dolor sit amet conse ctetu."
          positionClass="text-center"
          spaceClass="mb-60"
        />

        <div className="row">
          {teamMemberData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <TeamMemberOneSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TeamMemberOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TeamMemberOne;
import PropTypes from "prop-types";
import clsx from "clsx"
import Swiper, { SwiperSlide } from "../../components/swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import { Swiper, SwiperSlide } from "swiper/react";

const settings = {
  loop: true,
  autoplay: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    }
  }
};

const BrandLogoSliderOne = ({ spaceBottomClass, spaceTopClass }) => {
  return (
    <div className={clsx("brand-logo-area", spaceBottomClass, spaceTopClass)}>
      <div className="container">
        <div className="brand-logo-active">
          {brandLogoData && (
            <Swiper options={settings}>
              {brandLogoData.map((single, key) => (
                <SwiperSlide key={key}>
                  <BrandLogoOneSingle
                    data={single}
                    spaceBottomClass="mb-30"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BrandLogoSliderOne;
