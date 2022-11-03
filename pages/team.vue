<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Team" 
            pageDesc="Meet Our experts always ready to help you" 
        />
        <Team />
        <OurLovingClients />
        <WhatsOurClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Team from '../components/Team/Team'
import OurLovingClients from '../components/Common/OurLovingClients'
import WhatsOurClients from '../components/Common/WhatsOurClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Team,
        OurLovingClients,
        WhatsOurClients,
        FooterStyleOne,
    }
};
</script>