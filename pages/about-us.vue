<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About Us" pageDesc="Lorem Ipsum" />
        <Expertise />
        <WhyChooseUs />
        <Features />
        <About />
        <PageAbout />
        <Despite />
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
import Features from '../components/about-us/Features';
import About from '../components/about-us/About';
import PageAbout from '../components/about-us/PageAbout';
import Despite from '../components/about-us/Despite';
import Faq from '../components/about-us/Faq';
import BestSupport from '../components/about-us/BestSupport';
import FreeTrial from '../components/about-us/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Expertise,
        WhyChooseUs,
        Features,
        About,
        PageAbout,
        Despite,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
