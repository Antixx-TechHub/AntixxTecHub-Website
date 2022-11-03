<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Featured />
        <AboutUs />
        <OurServices />
        <CaseStudies />
        <Testimonials />
        <Partner />
        <OurTeam />
        <OurLatestBlog />
        <Video />
        <GetStarted />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import MainBanner from '../components/home-eight/MainBanner';
import Featured from '../components/home-eight/Featured';
import AboutUs from '../components/home-eight/AboutUs';
import OurServices from '../components/home-eight/OurServices';
import CaseStudies from '../components/home-eight/CaseStudies';
import Testimonials from '../components/home-eight/Testimonials';
import Partner from '../components/home-eight/Partner';
import OurTeam from '../components/home-eight/OurTeam';
import OurLatestBlog from '../components/home-eight/OurLatestBlog'
import Video from '../components/home-eight/Video';
import GetStarted from '../components/home-eight/GetStarted';
import Footer from '../layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        MainBanner,
        Featured,
        AboutUs,
        OurServices,
        CaseStudies,
        Testimonials,
        Partner,
        OurTeam,
        OurLatestBlog,
        Video,
        GetStarted,
        Footer,
    }
};
</script>
