<template>
    <div>
        <TopBar />
        <NavbarStyleThree />
        <MainBanner />
        <Features />
        <About />
        <Services />
        <Partner />
        <Expertise />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <Team />
        <Analysis />
        <Subscribe />
        <FooterStyleTwo />
    </div>
</template>

<script>
import TopBar from '../layouts/TopBar'
import NavbarStyleThree from '../layouts/NavbarStyleThree';
import MainBanner from '../components/home-ten/MainBanner';
import Features from '../components/home-ten/Features';
import About from '../components/home-ten/About';
import Services from '../components/home-ten/Services';
import Partner from '../components/home-ten/Partner'
import Expertise from '../components/home-ten/Expertise';
import CaseStudies from '../components/home-ten/CaseStudies';
import Pricing from '../components/home-ten/Pricing';
import Testimonials from '../components/home-ten/Testimonials';
import Team from '../components/home-ten/Team';
import Analysis from '../components/home-ten/Analysis'
import Subscribe from '../components/home-ten/Subscribe'
import FooterStyleTwo from '../layouts/FooterStyleTwo'

export default {
    components: {
        TopBar,
        NavbarStyleThree,
        MainBanner,
        Features,
        About,
        Services,
        Partner,
        Expertise,
        CaseStudies,
        Pricing,
        Testimonials,
        Team,
        Analysis,
        Subscribe,
        FooterStyleTwo,
    }
};
</script>
