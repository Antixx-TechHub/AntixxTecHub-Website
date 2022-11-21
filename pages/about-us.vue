<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About Us" pageDesc="Lorem Ipsum" />
        <Expertise />
        <WhyChooseUs />
        <PageAbout />
        <Features />
        <About />
        <Featured />
        <CaseStudies />
        <ConnectionsYourCustomers />
        <TheBestInnovative />
        <PageFeature />
        <Faq />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/about-us/PageTitle'
import Expertise from '../components/about-us/Expertise';;
import WhyChooseUs from '../components/about-us/WhyChooseUs';
import PageAbout from '../components/about-us/PageAbout';
import Features from '../components/about-us/Features';
import TheBestInnovative from '../components/about-us/TheBestInnovative';
import ConnectionsYourCustomers from '../components/about-us/ConnectionsYourCustomers';
import About from '../components/about-us/About';
import CaseStudies from '../components/about-us/CaseStudies';
import Featured from '../components/about-us/Featured';
import PageFeature from '../components/about-us/PageFeature';
import Faq from '../components/about-us/Faq';
import BestSupport from '../components/about-us/BestSupport';
import FreeTrial from '../components/about-us/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        Expertise,
        PageTitle,
        WhyChooseUs,
        PageAbout,
        Features,
        ConnectionsYourCustomers,
        TheBestInnovative,
        About,
        PageFeature,
        CaseStudies,
        Featured,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
