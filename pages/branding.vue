<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Branding" pageDesc="Lorem Ipsum" />
        <About />
        <WhyChooseUs />
        <MoreToDiscover />
        <!-- <AmazingFeatures />
        <ServicesOne />
        <Services />
        <YourApplication class="pt-0" />
        <TheAbilityToElicit />
        <Features />
        <PageAbout />
        <CaseStudies /> -->
        <!-- <Featured /> -->
        <ConnectionsYourCustomers />
        <TheBestInnovative />
        <!-- <PageFeature />
        <Expertise /> -->
        <Faq />
        <!-- <Pricing /> -->
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/branding/PageTitle';
import AmazingFeatures from '../components/branding/AmazingFeatures';
import ServicesOne from '../components/branding/ServicesOne';
import MoreToDiscover from '../components/branding/MoreToDiscover';
import Services from '../components/branding/Services';
import YourApplication from '../components/branding/YourApplication';
import TheAbilityToElicit from '../components/branding/TheAbilityToElicit';
import TheBestInnovative from '../components/branding/TheBestInnovative';
import WhyChooseUs from '../components/branding/WhyChooseUs';
import Features from '../components/branding/Features';
import ConnectionsYourCustomers from '../components/branding/ConnectionsYourCustomers';
import About from '../components/branding/About';
import PageAbout from '../components/branding/PageAbout';
import CaseStudies from '../components/branding/CaseStudies';
import Featured from '../components/branding/Featured';
import PageFeature from '../components/branding/PageFeature';
import Expertise from '../components/branding/Expertise';
import Faq from '../components/branding/Faq';
import Pricing from '../components/branding/Pricing';
import BestSupport from '../components/branding/BestSupport';
import FreeTrial from '../components/branding/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AmazingFeatures,
        ServicesOne,
        Services,
        MoreToDiscover,
        YourApplication,
        TheAbilityToElicit,
        WhyChooseUs,
        Features,
        ConnectionsYourCustomers,
        TheBestInnovative,
        About,
        PageAbout,
        PageFeature,
        CaseStudies,
        Featured,
        Expertise,
        Faq,
        Pricing,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
