<template>
    <nav class="paginate">
        <a v-for="(link, index) in this.$store.state.getUser.links"
           :key="index"
           :class="{
               'paginate__span-prev': link.url === null && link.label != '...' && link.active === false && index === 0,
               'paginate__link-prev': link.url != null && link.label != '...' && link.active === false && index === 0,
               'paginate__link-active': link.url != null && link.label != '...' && link.active === true,
               'paginate__link': link.url != null && link.label != '...' && link.active === false && index != linksLength - 1,
               'paginate__dots': link.url === null && link.label === '...',
               'paginate__link-next': link.url != null && index === linksLength - 1,
               'paginate__span-next': link.url === null && index === linksLength - 1
           }"
           :disabled="(link.url === null && link.label != '...' && link.active === false && index === 0) ||
                     (link.url != null && link.label != '...' && link.active === true) ||
                     (link.url === null && link.label === '...') ||
                     (link.url === null && index === this.$store.state.links.length - 1)"
           @click="paging(link, index)"
           v-html="link.label"
        >
        </a>
    </nav>
</template>

<script>
export default {
    name: "linksPaginate",
    data: function () {
        return {
            linksLength: this.$store.state.getUser.links.length
        }
    },
    methods: {
        paging(link, index) {
            if ( (link.url === null && link.label != '...' && link.active === false && index === 0) ||
                (link.url != null && link.label != '...' && link.active === true) ||
                (link.url === null && link.label === '...') ||
                (link.url === null && index === this.$store.state.getUser.links.length - 1) ) {

                return;
            }
            let pageNumb;
            if (link.url != null) {
                pageNumb = Number(new URL(link.url).searchParams.get('page'));
            }
            this.$emit('paging', pageNumb);
        }
    }
}
</script>
