<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Blog Details" 
            pageDesc="News and Insights" 
        />
        <BlogDetails />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import BlogDetails from '../components/single-blog/BlogDetails'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        BlogDetails,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>