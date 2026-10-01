import {useState} from 'react'


function CreationBaby(){
    const [name,setName]=useState("");
    const [firstname,setfirstName]=useState("");
    const [sex,setSex]=useState("");
    return (
        <>
        <h1>Enregistrement du nouveau né</h1>
        <form>
            <fieldset>
                <legend>Information du nouveau né</legend>
                <label htmlFor="nom">Nom:</label>
                <input placeholder="Entrez le nom du nouveau-né" type="text" id="nom" value={name} onChange={(event)=>
                    setName(event.target.value)
                }/>
                <label htmlFor="prenom">Prénom:</label>
                <input placeholder="Entrez le prénom du nouveau-né" type="text" id="prenom" value={firstname}
                onChange={(event)=>setfirstName(event.target.value)}
                />
                <label htmlFor="sexe">Sexe:</label>
                <select id="sexe" value={sex}
                onChange={(event)=>setSex(event.target.value)}
                >
                    <option value="">Selectionner le sexe du nouveau-né</option>
                    <option value="Masculin">Masculin</option>
                    <option value="Feminin">Feminin</option>
                </select>
                <label htmlFor="date-naissance">Date de naissance:</label>
                <input type="date" id="date-naissance" />
                <label htmlFor="lieu-naissance">Lieu de naissance:</label>
                <input placeholder="Entrez lelieu de naissance" type="text" id="lieu-naissance" />
                <label htmlFor="poids">Poids(en kg):</label>
                <input placeholder="Entrez le poids" type="number" id="poids" />
                <label htmlFor="taille">Taille(en cm):</label>
                <input placeholder="Entrez la taille" type="number" id="taille" />
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