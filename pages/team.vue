<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Our Exepert Team" 
            pageDesc="Meet Our experts always ready to help you" 
        />
        <Team />
        <OurLovingClients />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/executive-leadership/PageTitle';
import Team from '../components/Team/Team'
import OurLovingClients from '../components/Team/OurLovingClients'
import BestSupport from '../components/Team/BestSupport'
import FreeTrial from '../components/Team/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Team,
        OurLovingClients,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>