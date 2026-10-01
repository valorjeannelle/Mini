
function CreationBaby(){
    return (
        <>
        <h1>Enregistrement du nouveau né</h1>
        <form>
            <fieldset>
                <legend>Information du nouveau né</legend>
                <label htmlFor="nom">Nom:</label>
                <input type="text" id="nom" />
                <label htmlFor="prenom">Prénom:</label>
                <input type="text" id="prenom" />
                <label htmlFor="sexe">Sexe:</label>
                <select id="sexe">
                    <option>Masculin</option>
                    <option>Feminin</option>
                </select>
                <label htmlFor="date-naissance">Date de naissance:</label>
                <input type="date" id="date-naissance" />
                <label htmlFor="lieu-naissance">Lieu de naissance:</label>
                <input type="text" id="lieu-naissance" />
                <label htmlFor="poids">Poids(en kg):</label>
                <input type="number" id="poids" />
                <label htmlFor="taille">Taille(en cm):</label>
                <input type="number" id="taille" />
                <label htmlFor="statut-vital">Statut vital:</label>
                <select id="statut-vital">
                    <option>Vivant</option>
                    <option>Mort né</option>
                </select>
                <label htmlFor="photo">Photo du nouveau-né:</label>
                <input type="file" id="photo" accept="image/*" />
            </fieldset>
        </form>
        </>
    );
}

export default CreationBaby;