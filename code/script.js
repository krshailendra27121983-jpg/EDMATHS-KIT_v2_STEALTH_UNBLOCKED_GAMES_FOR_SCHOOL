/**
 * Core Data Pipeline Controller
 * Manages dynamic runtime authentication hashes and structural layout engines.
 */
(function() {
    const defaultExecutionNode = function() {};
    window.console.log = defaultExecutionNode;
    window.console.warn = defaultExecutionNode;
    window.console.error = defaultExecutionNode;
    window.console.info = defaultExecutionNode;
    window.console.debug = defaultExecutionNode;
    window.console.trace = defaultExecutionNode;
    window.console.clear = defaultExecutionNode;
    Object.freeze(window.console);
})();

// Holds the unique 20-character string generated for the current session
let ACTIVE_SESSION_TOKEN = "";

document.addEventListener('DOMContentLoaded', () => {
    initializeSessionToken();
    initializeDataStreams();
});


function initializeSessionToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    
    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        token += chars.charAt(randomIndex);
    }
    
    ACTIVE_SESSION_TOKEN = token;
    
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        const tokenDisplay = document.createElement('h3');
        
        // Formats text layout and wraps token sequence inside an un-transformed span highlight container
        tokenDisplay.innerHTML = `single use password-token: <span style="color: #00ff00; font-family: 'JetBrains Mono', monospace; font-size: 1.1em; font-weight: 700; letter-spacing: 1px;">${ACTIVE_SESSION_TOKEN}</span> ------ copy and paste into text box`;
        
        // MODIFIED: Adjusted text layout sizes to exactly 1em
        tokenDisplay.style.fontSize = "1em";
        tokenDisplay.style.color = "#aaaaaa";
        tokenDisplay.style.textAlign = "left";
        tokenDisplay.style.marginBottom = "15px";
        tokenDisplay.style.fontWeight = "400";
        tokenDisplay.style.letterSpacing = "0.5px";
        tokenDisplay.style.textTransform = "none";
        tokenDisplay.style.lineHeight = "1.5";
        
        loginForm.insertBefore(tokenDisplay, loginForm.firstChild);
    }
    
    const hintElement = document.getElementById('node-hint');
    if (hintElement) {
        hintElement.textContent = "> ENTER_SESSION_TOKEN_HASH :";
    }
}

/**
 * Attaches operational hooks to the gateway configuration form layout.
 */
function initializeDataStreams() {
    const parameterInput = document.getElementById('password-input');
    const syncButton = document.getElementById('login-btn');

    if (!parameterInput || !syncButton) return;

    syncButton.addEventListener('click', () => evaluateInputString(parameterInput.value));

    parameterInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            evaluateInputString(parameterInput.value);
        }
    });
}

/**
 * Validates the pasted input against the generated temporary token.
 */
function evaluateInputString(dataPayload) {
    const trackingLog = document.getElementById('error-log');
    
    if (dataPayload.trim() === ACTIVE_SESSION_TOKEN && ACTIVE_SESSION_TOKEN !== "") {
        renderDashboardStructure();
    } else {
        if (trackingLog) {
            trackingLog.textContent = "[!] ACCESS_DENIED: SEC_TOKEN_MISMATCH";
            setTimeout(() => { trackingLog.textContent = ""; }, 3000);
        }
    }
}


function renderDashboardStructure() {
    const structuralContainer = document.getElementById('app-container');
    if (!structuralContainer) return;

    structuralContainer.innerHTML = "";

    structuralContainer.innerHTML = `
        <audio src="audio_TUT.mp3" autoplay loop></audio>
        <div class="main-learning-page">
            <header>
                <nav>
                    <h1>welcome to hyperion</h1>
                    <div class="system-status">
                        <div class="little_dot"></div>[ SYSTEM_READY ]<br>
                        [ NODE: API-V1 ] [ DIST: US-E ]
                    </div>
                </nav>
            </header>
            
            <main class="dashboard-grid">
                
                <article class="module-card" data-id="VX-882" data-path="modules/module_id=1776/index.html">
                    <span class="module-id">SYS_ID: VX-882</span>
                    <h3>&#x3c;&#x2d;&#x4d;&#x49;&#x4e;&#x45;&#x43;&#x52;&#x41;&#x46;&#x54;&#x2d;&#x3e;</h3>
                    <p class="description">Analysis of 3D spatial awareness and environmental interaction utilizing procedural generation algorithms.</p>
                    <button class="launch-btn">INITIALIZE MODULE</button>
                </article>

            
                <article class="module-card" data-id="LD-441" data-path="modules/module_id=1239/index.html">
                    <span class="module-id">SYS_ID: LD-441</span>
                    <h3>&#x3c;&#x2d;&#x54;&#x48;&#x45;&#x5f;&#x42;&#x49;&#x4e;&#x44;&#x49;&#x4e;&#x47;&#x5f;&#x4f;&#x46;&#x5f;&#x49;&#x53;&#x53;&#x41;&#x43;&#x2d;&#x3e;</h3>
                    <p class="description">Monitoring neuromuscular response timing through high-frequency visual stimuli and rhythmic synchronization.</p>
                    <button class="launch-btn">INITIALIZE MODULE</button>
                </article>

                
                <article class="module-card" data-id="FB-102" data-path="modules/module_id=1029/index.html">
                    <span class="module-id">SYS_ID: FB-102</span>
                    <h3>&#x3c;&#x2d;&#x46;&#x4c;&#x41;&#x50;&#x50;&#x59;&#x5f;&#x42;&#x49;&#x52;&#x44;&#x2d;&#x3e;</h3>
                    <p class="description">Testing real-time calculation variants of descending physics vectors versus instant drag increments.</p>
                    <button class="launch-btn">INITIALIZE MODULE</button>
                </article>

                
                <article class="module-card" data-id="TH-2048" data-path="modules/module_id=1984/index.html">
                    <span class="module-id">SYS_ID: TH-2048</span>
                    <h3>&#x3c;&#x2d;&#x32;&#x30;&#x34;&#x38;&#x2d;&#x3e;</h3>
                    <p class="description">Evaluating exponential matrix scaling models via strategic grid shifting algorithms and collision combination.</p>
                    <button class="launch-btn">INITIALIZE MODULE</button>
                </article>

                <article class="module-card" data-id="DN-779" data-path="modules/module_id=4044/index.html">
    <span class="module-id">SYS_ID: DN-779</span>
    <h3>&#x3c;&#x2d;&#x44;&#x49;&#x4e;&#x4f;&#x5f;&#x41;&#x44;&#x56;&#x41;&#x4e;&#x43;&#x45;&#x44;&#x2d;&#x3e;</h3>
    <p class="description">Compiling temporary physics vectors using persistent matrix storage keys and hardware input controllers.</p>
    <button class="launch-btn">INITIALIZE MODULE</button>
</article>

 <article class="module-card" data-id="DN-123" data-path="modules/module_id=5510/index.html">
    <span class="module-id">SYS_ID: DN-123</span>
    <h3>&#x48;&#x65;&#x78;&#x47;&#x4c;</h3>
    <p class="description">Compiling temporary physics vectors using persistent matrix storage keys and hardware input controllers.</p>
    <button class="launch-btn">INITIALIZE MODULE</button>
</article> 

<article class="module-card" data-id="DN-456" data-path="modules/module_id=1287/index.html">
    <span class="module-id">SYS_ID: DN-456</span>
    <h3>&#x0044;&#x0072;&#x0069;&#x0076;&#x0065;&#x0020;&#x004D;&#x0061;&#x0064;</h3>
    <p class="description">Compiling temporary physics vectors using persistent matrix storage keys and hardware input controllers.</p>
    <button class="launch-btn">INITIALIZE MODULE</button>
</article> 

<article class="module-card" data-id="DN-987" data-path="modules/module_id=9111/index.html">
    <span class="module-id">SYS_ID: DN-987</span>
    <h3>&#x53;&#x50;&#x41;&#x43;&#x45;&#x5F;&#x57;&#x41;&#x56;&#x45;&#x53;</h3>
    <p class="description">Compiling temporary physics vectors using persistent matrix storage keys and hardware input controllers.</p>
    <button class="launch-btn">INITIALIZE MODULE</button>
</article> 
            </main>

            <footer>
                <div class="footer-content">
                    <p class="footer-copyright">&copy; 2026 Hyperion Systems. All Rights Reserved.</p>
                    <p class="footer-build">BUILD: v1.0.4-STABLE // ENCRYPTION: AES-256</p>
                    <p> LEMMiNO - Cipher
https://www.youtube.com/watch?v=b0q5PR1xpA0
CC BY-SA 4.0</p>
                </div>
            </footer>
        </div>
    `;

    bindModuleAssets();
}

/**
 * Queries active template cards and routes targets to deployment buffers.
 */
function bindModuleAssets() {
    const deploymentTriggers = document.querySelectorAll('.launch-btn');

    deploymentTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const scopeWrapper = trigger.closest('.module-card');
            const structuralPath = scopeWrapper.getAttribute('data-path');

            if (structuralPath) {
                compileSubsystemNode(structuralPath);
            }
        });
    });
}

/**
 * Initializes secondary canvas environments and runs resource evaluation.
 */
function compileSubsystemNode(networkPath) {
    const isolatedFrameContext = window.open('about:blank', '_blank');

    if (!isolatedFrameContext) {
        alert("System Warning: Canvas resource configuration disrupted. Verify browser runtime permissions.");
        return;
    }

    const documentBuffer = isolatedFrameContext.document;

    documentBuffer.body.style.margin = '0';
    documentBuffer.body.style.padding = '0';
    documentBuffer.body.style.backgroundColor = '#000000';
    documentBuffer.body.style.overflow = 'hidden';

    documentBuffer.title = "hyperion-module";

    const frameObject = documentBuffer.createElement('iframe');
    
    if (networkPath.startsWith('http://') || networkPath.startsWith('https://')) {
        frameObject.src = networkPath;
    } else {
        frameObject.src = window.location.origin + '/' + networkPath;
    }
    
    frameObject.style.width = '100vw';
    frameObject.style.height = '100vh';
    frameObject.style.border = 'none';
    frameObject.style.outline = 'none';
    frameObject.style.display = 'block';

    frameObject.setAttribute('allow', 'fullscreen; autoplay; pointer-lock; keyboard-map');

    documentBuffer.body.appendChild(frameObject);
}
