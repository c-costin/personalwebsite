<script>
    import '../app.scss';
</script>

<section class="about">
    <img src="./images/me.jpg" alt="Photographie de Costin Cadeau" class="about__img">
    <div class="about__desc">
        <p class="about__text">
            Hello, World ! Je suis Costin Cadeau développeur web, j’aime coder des deux côtes de la requête.
        </p>
        <p class="about__text">
            Pourquoi un artisan du web ?! J’aime faire le parallèle avec l’artisanat qui sont des métiers passionnant, créatif et unique. Le développement web permet cela, qu’on sois dev frontend ou dev backend, un projet est toujours unique !
        </p>
        <p class="about__text">
            Pour ma petit histoire je suis passionné d’informatique depuis mes 11ans. J’ai étudié et travail dans le domaine, Mon dernier emploi était au seins de l’Armée de l’Air et l’Espace, j’était Administrateur réseaux et télécoms. Après avoir découvert l’HTML et le CSS, j’ai voulu devenir développeur web. Pour cet nouvelle aventure, je l’ai commencé avec O’Clock.
        </p>
    </div>
</section>

<style lang="scss">
    .about {
        margin-top: 8rem;
        padding-inline: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        &__img {
            width: 12rem;
            border-radius: .5rem;
        }
        &__desc {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        &__text {
            line-height: 1.85rem;
        }
    }
</style>