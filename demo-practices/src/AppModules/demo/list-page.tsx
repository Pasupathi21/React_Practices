import { useState } from "react";

import Icons from "@material-ui/icons";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  AppTextField,
  AppAutoComplete,
  AppPaperSurface,
  AppBoxLayout,
  AppGridLayout,
  AppButton,
  AppDrawer
} from "../../components/index";

import { paperMainStyle, AppDrawerStyle } from "../../component-styles/index";

import DemoAddEditView from './add-edit-view'

type Anchor = 'left' | 'right' | 'top' | 'bottom'

function DemoPage() {

  const [drawState, setDrawState] = useState({
    open: false,
    anchor: ''
  })
  const paperCls = paperMainStyle();
  const drawerStyle = AppDrawerStyle();

  const toggleDrawe = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if(event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') return
    setDrawState({ ...drawState, ['anchor']: anchor, ['open']: open})
  }
  return (
    <>
      <AppPaperSurface elevation={3} className={paperCls.container}>
        <AppGridLayout container spacing={3}>
          <AppGridLayout container item xs={12}>
            <AppGridLayout item xs={6} spacing={2}>
              hello
            </AppGridLayout>
            <AppGridLayout container item xs={6} spacing={2} direction='row' justifyContent='flex-end'>
              <AppGridLayout container item xs={2}>
                <AppBoxLayout>
                  <AppButton
                    variant="contained"
                    btnName="Add"
                    startIcon={<SaveIcon />}
                    onClick={toggleDrawe('right', true)}
                  />
                </AppBoxLayout>
              </AppGridLayout>
              <AppGridLayout container item xs={2}>
                <AppBoxLayout>
                  <AppButton variant="contained" btnName="Edit" startIcon={<EditIcon />}/>
                </AppBoxLayout>
              </AppGridLayout>
              <AppGridLayout container item xs={2}>
                <AppBoxLayout>
                  <AppButton variant="contained" btnName="Delete" startIcon={<DeleteIcon />}/>
                </AppBoxLayout>
              </AppGridLayout>
            </AppGridLayout>
          </AppGridLayout>
          <AppGridLayout container item xs={12}></AppGridLayout>
        </AppGridLayout>
      </AppPaperSurface>
      <AppDrawer
      className={[drawerStyle.paper, drawerStyle.root]}
      anchor={drawState.anchor}
      open={drawState.anchor}
      >
        <DemoAddEditView />
      </AppDrawer >
    </>
  );
}

{
  /* <AppTextField
            label="Test"
            defaultValue="test"
            variant="outlined"
          ></AppTextField> */
}

export default DemoPage;
