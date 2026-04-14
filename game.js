const output = document.getElementById('output');
const input = document.getElementById('user-input');

const commands = {
    help: "Available: scan, hack [target], clear, system_info",
    scan: "Scanning... Found nodes: [ADMIN_CORE], [DATABASE_X], [FIREWALL_7]",
    system_info: "Aether-Nexus v3 // Kernel 4.2.0-secure",
};

function print(text, type = 'default') {
    const line = document.createElement('div');
    line.className = `line ${type}`;
    line.innerHTML = `[${new Date().toLocaleTimeString()}] ${text}`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = input.value.toLowerCase().trim();
        print(`> ${val}`, 'user');
        
        if (commands[val]) {
            print(commands[val], 'system');
        } else if (val.startsWith('hack ')) {
            print("INITIALIZING BRUTE FORCE... 10%... 45%... 100%", 'warning');
            print("ACCESS GRANTED. DATA EXFILTRATED.", 'success');
        } else {
            print("COMMAND NOT FOUND. TYPE 'HELP'.", 'error');
        }
        
        input.value = '';
    }
});

print("NEURAL LINK ESTABLISHED. WELCOME, OPERATOR.", 'system');
