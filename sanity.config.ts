import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { TbFileCvFilled, TbMicrophone2 } from 'react-icons/tb'
import { SiHeroicgameslauncher } from 'react-icons/si'
import { GoHeartFill } from 'react-icons/go'
import { MdOutlineArtTrack } from 'react-icons/md'

const singletonActions = new Set(['publish', 'restore', 'discardChanges'])
const singletonTypes = new Set(['titleSection', 'artworksSection', 'cvSection', 'contactsSection'])

export default defineConfig({
  name: 'default',
  title: 'Frankie portfolio',

  projectId: 'p7mle4yx',
  dataset: 'production',

  plugins: [structureTool(
    {structure: (S) => 
      S.list().title('Content').items([
        S.divider().title('Sections'),
         S.listItem()
         .title('Title Section')
         .id('titleSection')
         .icon(SiHeroicgameslauncher)
         .child(S.document().schemaType('titleSection').documentId('titleSection')),
         S.listItem()
         .title('Artworks Section')
         .id('artworksSection')
         .icon(GoHeartFill)
         .child(S.document().schemaType('artworksSection').documentId('artworksSection')),
         S.listItem()
         .title('CV Section')
         .id('cvSection')
         .icon(TbFileCvFilled)
         .child(S.document().schemaType('cvSection').documentId('cvSection')),
         S.listItem()
         .title('Contacts Section')
         .id('contactsSection')
         .icon(TbMicrophone2)
         .child(S.document().schemaType('contactsSection').documentId('contactsSection')),
         S.divider().title('Shortcut'),
          S.documentTypeListItem('artwork')
          .title('Artworks')
          .icon(MdOutlineArtTrack ),
      ])}
  ), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && singletonActions.has(action)) : input,
  }
})
