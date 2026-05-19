# Public Repo Role Contract

Date: 2026-05-20

## Shared Public Sentence

VIRTURA is a decentralized art collective and research network centered on perceptual migration, spatial organization, and image generation.

VIRTURA 围绕感知迁移、空间组织与图景生成展开，通过现场演出、空间影像、实时系统、研究实验与数字工具，把结构、感知与空间经验组织成可被进入的作品、场景与接口。

## Repository Roles

| Repository | Public role | Owns | Does not own |
|---|---|---|---|
| `portfolio` | Personal entry | Ewan Qian identity, selected personal works, personal practice lines, services, personal archive entry | team identity, full VIRTURA archive, publication outlet |
| `VIRTURA-Collective` | Team entry | VIRTURA identity, people, public works, programs, activities, collaboration routes | deep station archive, personal-only portfolio logic, internal ops |
| `VIRTURA-SpacePort` | Public frontstage | stations, knowledge network, deep project archive, public trackers, source-of-truth docs | team identity as homepage, article publication outlet, private governance |
| `VIRTURA-Newsroom` | Publication outlet | essays, art reviews, project recaps, announcements, media kit, public context around works and systems | main team homepage, archive source, product repo |

## Out Of Scope For This Wave

Tool, runtime, data, tracker, and private governance repos are intentionally excluded from this first public graph wave. They can be referenced from older articles when context requires it, but they are not part of the four-repo public navigation contract.

## Public Reading Order

For a first-time visitor:

1. `VIRTURA-Collective` if they need the team.
2. `portfolio` if they need Ewan Qian's personal proof and services.
3. `VIRTURA-SpacePort` if they need stations, archive, or knowledge network.
4. `VIRTURA-Newsroom` if they need essays, recaps, reviews, or media kit.

## View Rule

The same work can appear in multiple repos, but each appearance must state its view:

| View | Meaning |
|---|---|
| `personal_view` | individual role, method, evidence, contact route |
| `team_view` | collective context, collaborators, public team value |
| `archive_view` | deep source, versions, venue, assets, project evidence |
| `publication_view` | article, recap, criticism, public interpretation |
| `member_work_view` | formal public page for a member's independent work, without claiming team ownership |
| `artist_context_view` | artist/member page that explains relationship to the network |
| `deck_view` | condensed partner-facing summary |

## Minimum Public View Block

Every repeated public object page should carry these fields near the top:

- `object_id`: stable public id from [PUBLIC_LINK_MATRIX.csv](./PUBLIC_LINK_MATRIX.csv)
- `view_type`: `personal_view`, `team_view`, `archive_view`, `publication_view`, `member_work_view`, `artist_context_view`, or `team_context_view`
- `authorship_type`: `team_work`, `collaboration`, `member_independent_work`, `external_partner_work`, or `research_context`
- `related_views`: links to the other public views when they exist

This block is the anti-duplication guard. If a new page cannot name its `object_id` and `view_type`, it should not be created yet.

## Authorship Rule

Every selected work should carry `authorship_type`:

- `team_work`
- `member_independent_work`
- `collaboration`
- `external_partner_work`
- `research_context`

Public copy should repeat the boundary:

VIRTURA does not claim ownership of all works. It provides a shared context where different practices intersect.

## Frontstage Rule

Show evidence first, system second, archive third.

First screen should not explain the whole infrastructure. It should give:

- one sentence
- three strongest works or stations
- one next action

## Bilingual Rule

English can be shorter than Chinese, but cannot be older.

If a full English mirror is not maintained, label it as a condensed English overview and point to the Chinese full version.
