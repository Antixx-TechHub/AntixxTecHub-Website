<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Blogs" 
            pageDesc="News and Insights" 
        />
        <BlogOne />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import BlogOne from '../components/blogs/BlogOne'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        BlogOne,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>