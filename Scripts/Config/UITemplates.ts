
namespace I0 {
    export const OKButtonTemplate: string = '<input class="okbtn" type="button" value="OK" />'; 
    export const CancelButtonTemplate: string = ' &nbsp; <input class="cancelbtn" type="button" value="Cancel" />';
    export const popUpTemplate = `
    <div id="app_pop_up{{templateZIndex}}" class="popup-message" style="z-index:{{templateZIndex}};">
    <div class="card">
        <div class="card-header">
            <div class="title" title="{{templatetitle}}">{{templatetitle}}</div>
            <div class="toolbar">
                <div class="close-button clickable-icon" title="Close"><span class="fas fa-window-close"></span></div>
            </div>
        </div>
        <div class="card-main">
            <div class="warning"></div>
            <div class="content">{{templatecontent}}</div>
        </div>
        <div class="card-bottom">
            <div class="buttons"></div>
        </div>
    </div></div>`;
    export const explorerTemplate = `
    <div class="sidenav-list-header-grid">
    <div class="sidenav-top-context">{{explorername}}</div> 
      <div class="toolbar">
        <div id="explorer-add-pool-button" title="Add Folder" class="clickable-icon"><span class="fas fa-folder-plus"></span></div>
      </div>
    </div>
    <ul class="sidenav-list">
    </ul>`;
    export const poolTemplate  = `
    <li>
    <div class="sidenav-list-header-grid">
        <div {{templateid}} class="sidenav-list-header">{{templatename}}</div> 
    <div class="toolbar">
        <div {{templateid}} title="Add" class="explorer-add-pool-item-button clickable-icon"><span class="fas fa-file-medical"></span></div>
        <div {{templateid}} title="Edit" class="explorer-pool-edit-button clickable-icon"><span class="fas fa-edit"></span></div>
        <div {{templateid}} title="Remove" class="explorer-pool-remove-button clickable-icon"><span class="fas fa-trash-alt"></span></div>
    </div>
    </div>
    <ul {{templateid}} class="sublist h">
    </ul>
    </li>`;
    export const defaultExpanderButtonTemplate = `
    <div id="top-context-expander-button" title="Hide / Show" class="clickable-icon open"><span class="fas fa-caret-square-up"></span></div>`;    
    export const defaultHeaderToolbarTemplate = `
    <div id="screen-edit-button" title="Edit" class="clickable-icon"><span class="fas fa-edit"></span></div>
    <div id="screen-remove-button" title="Remove" class="clickable-icon"><span class="fas fa-trash-alt"></span></div>` +
    defaultExpanderButtonTemplate;    
    export const defaultBodyToolbarTemplate: string = `
    <div id="card-add-button" title="Add" class="clickable-icon open"><span class="fas fa-plus-square"></span></div>`;
    export const defaultTableToolbarTemplate = `
    <div {{templateid}} title="Add" class="card-item-add-button clickable-icon"><span class="fas fa-plus-square"></span></div>
    <div {{templateid}} title="Edit" class="card-edit-button clickable-icon"><span class="fas fa-edit"></span></div>
    <div {{templateid}} title="Remove" class="card-remove-button clickable-icon"><span class="fas fa-trash-alt"></span></div>`;
    export const defaultItemToolbarTemplate = `
    <div {{templateid}} title="Edit" class="card-item-edit-button clickable-icon"><span class="fas fa-edit"></span></div>
    <div {{templateid}} title="Remove" class="card-item-remove-button clickable-icon"><span class="fas fa-trash-alt"></span></div>`;
    export const editorCardTemplate = `
    <div class="card-col"><div class="card">
        <div class="card-header">
            <div class="title" title="{{templatetitle}}"><span class="{{templateiconclass}}"></span>{{templatetitle}}</div>
            <div class="toolbar">{{templatetabletoolbar}}</div>
        </div>
        <div class="card-main">
            <table class="card-main-table table-striped {{templatetableclass}}">
            <thead><tr>{{templatetablehead}}</tr></thead>
            <tbody>{{templatetablebody}}</tbody>
            </table>
        </div>
    </div></div>`;    
    export const editorCardItemTemplate = `
    <tr>
    <td>{{templatecol1}}</td><td>{{templatecol2}}</td><td><div class="toolbar">{{templatetoolbar}}</div></td>
    </tr>`;
    export const downloadCardTemplate = `
    <div class="card-col"><div class="card download-card">
        <div class="card-icon"><span class="fas fa-{{templateIcon}}"></span></div>
        <div class="card-main">
            <div class="card-title">{{templateTitle}}</div>
            <div class="card-subtitle">{{templateType}}</div>
        </div>
        </div>
    </div>  `;
    export const cardTemplate = `
    <div class="card-col"><div class="card">
        <div class="card-header">{{templatetitle}}</div>
        <div class="card-main">{{templatecontent}}</div>
    </div></div>`;
    export const progressCardTemplate = `
    <div class="card-col"><div class="card dashboard-kpi">
        <div class="card-header">{{templatetitle}} <span class='counter'>{{templatecounter}}</span></div>
        <div class="card-main">
            <div class="dashboard-kpi">{{templateprogress}}%</div>
            <div class="progress-bar-container accent-bg-color-refracted">
                <div class="progress-bar accent-bg-color" style="width: {{templateprogress}}%;"></div>
            </div>
        </div>
    </div></div>`;
    export const rankCardTemplate = `
    <div class="card">
        <div class="card-header">
            <div>FEATURE PROFILES</div>
            <div class="toolbar">{{templatetabletoolbar}}</div>
        </div>
        <div class="card-main">
            <table class="card-main-table table-striped profile-dashboard">
              <thead><tr><th>Profile</th><th>Features</th><th>% Completed</th></tr></thead>
              <tbody>
              {{templatelist}}
            </tbody></table>
        </div>
    </div> `;  
    export const rankCardRowTemplate = `
    <tr><td>{{templatetitle}}</td><td>{{templatecounter}}</td>
        <td>
            <div class="progress-bar-container accent-bg-color-refracted">
            <div class="progress-bar accent-bg-color" style="width: {{templateprogress}}%;">{{templateprogress}}%</div>
            </div>
    </td></tr>`;
    export const roadmapCardTemplate = `
      <div class="card">
      <div class="card-header">ROADMAP</div>
      <div class="card-main">
          <div class="roadmap">
          <ul class="timeline">
          {{templatetimeline}}
          </ul>
        </div>
    </div>`;
    export const matrixTemplate = `
    <div class="table-scroller">
    <table class="table-centered table-striped matrix-list">
    <thead></thead>
    <tbody></tbody>
    </table>
    </div>`;
    export const themeTemplate = `
    .accent-color { color: {{templatecolor1}}; }
    .accent-color-refracted { color: {{templatecolor2}}; }
    .accent-bg-color { background:{{templatecolor1}}; }
    .accent-bg-color-refracted { background: {{templatecolor2}}; }
    .timeline-item:before{ background: {{templatecolor1}}; border: 3px solid {{templatecolor2}}; }`; 
    export const AboutTemplate = `
    <div class='rich-text'>
        <h3>Iteration0 - V0.5 - Product Management Solution</h3>
        <p>
            Original Creation by
            <a class="u" href='https://fr.linkedin.com/in/jean-charles-labas-30878951'>Jean-Charles LABAS</a>
        </p>
        <p>
            <a class="u" href='https://github.com/cognitic/iteration0'>Source code</a> under 
            <a class="u" href='https://www.gnu.org/licenses/gpl-3.0.html'>GPLv3 Licence</a>        
        </p>
    </div>`;
}