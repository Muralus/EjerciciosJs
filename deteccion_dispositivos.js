const d = document,
n = navigator,
ua = n.userAgent

export default function userDeviceInfo (id) {
    const $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any : function() {
            return this.linux() || this.mac() || this.windows();
        }
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        mozilla: () => ua.match(/firefox/i),
        edge: () => ua.match(/edge/i),
        opera: () => ua.match(/opera|opera mini/i),
        safari: () => ua.match(/safari/i),
        ie: () => ua.match(/msie1iemobile/i),
        any: function () {
            return(
                this.ie() || this.mozilla() || this.chrome() || this.opera() || this.safari() || this.edge ()
            )
        }
    }
    
    $id.innerHTML = ` 
    <ul>
    <li>User Agent: <b> ${ua} </b></li>
    <li>Plataforma: <b> ${isMobile.any()? isMobile.any(): isDesktop.any()} </b></li>
    <li>Navegador: <b> ${isBrowser.any()} </b></li>
    </ul>
    `;

    if (isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se puede visualizar en chrome</mark></p>`;
    }


    if (isBrowser.mozilla()){
        $id.innerHTML += `<p><mark>Este contenido solo se puede visualizar en Firefox</mark></p>`;
    }
}