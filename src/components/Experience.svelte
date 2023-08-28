<script>
    import '../app.scss';
</script>

<section class="experience">
    <h2 class="experience__title">Expériences</h2>
    <ul class="experience__list">
        <li class="experience__item">
            <h3 class="experience__job">Développeur Web</h3>
            <div class="experience__desc">
                <p class="experience__name"><em>Projet GaraLib</em></p>
                <p class="experience__date"><time datetime="2022-05">Mai 2022</time></p>
            </div>
        </li>
        <li class="experience__item">
            <h3 class="experience__job">Développeur Web</h3>
            <div class="experience__desc">
                <p class="experience__name"><em>Cadeau des Toits</em></p>
                <p class="experience__date"><time datetime="2021-06">Juin 2021</time></p>
            </div>
        </li>
        <li class="experience__item">
            <h3 class="experience__job">Administrateur Réseau & Télécom</h3>
            <div class="experience__desc">
                <p class="experience__name"><em>Armée de l'Air</em></p>
                <p class="experience__date"><time datetime="2017">2017</time> à <time datetime="2021">2021</time></p>
            </div>
        </li>
    </ul>
</section>

<style lang="scss">
    .experience {
        margin-top: 4rem;
        margin-inline: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        &__title {
            font-family: $montserrat-semibold;
            color: $primary-blue;
        }
        &__list {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            list-style: none;
        }
        &__item {
            display: flex;
            flex-direction: column;
            gap: .25rem;
        }
        &__job {
            font-size: 1rem;
        }
        &__desc {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            font-family: $montserrat-italic;
        }
    }
</style>