import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function Tree() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <TreeItem nodeId="1" label="BOA">
        <TreeItem nodeId="2" label="Profil Responden Internal" />
        <TreeItem nodeId="3" label="Quality in Use Internal" />
      </TreeItem>
      <TreeItem nodeId="4" label="LUPIS">
        <TreeItem nodeId="5" label="Profil Responden Internal"/>
        <TreeItem nodeId="6" label="Quality in Use Internal"/>
        <TreeItem nodeId="7" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="8" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="9" label="Pcare">
        <TreeItem nodeId="10" label="Profil Responden Internal"/>
        <TreeItem nodeId="11" label="Quality in Use Internal"/>
        <TreeItem nodeId="12" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="13" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="14" label="Vclaim">
        <TreeItem nodeId="15" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="16" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="17" label="Verifikasi Digital">
        <TreeItem nodeId="18" label="Profil Responden Internal"/>
        <TreeItem nodeId="19" label="Quality in Use Internal"/>
      </TreeItem>
      <TreeItem nodeId="20" label="HFIS">
        <TreeItem nodeId="21" label="Profil Responden Internal"/>
        <TreeItem nodeId="22" label="Quality in Use Internal"/>
        <TreeItem nodeId="23" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="24" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="25" label="Antrean Online">
        <TreeItem nodeId="26" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="27" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="28" label="Apotek Online">
        <TreeItem nodeId="29" label="Profil Responden Internal"/>
        <TreeItem nodeId="30" label="Quality in Use Internal"/>
        <TreeItem nodeId="31" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="32" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="33" label="Keuangan">
        <TreeItem nodeId="34" label="Profil Responden Internal"/>
        <TreeItem nodeId="35" label="Quality in Use Internal"/>
      </TreeItem>
      <TreeItem nodeId="36" label="New In Monica">
        <TreeItem nodeId="37" label="Profil Responden Internal"/>
        <TreeItem nodeId="38" label="Quality in Use Internal"/>
      </TreeItem>
      <TreeItem nodeId="39" label="Iuran Wajib">
        <TreeItem nodeId="40" label="Profil Responden Internal"/>
        <TreeItem nodeId="41" label="Quality in Use Internal"/>
      </TreeItem>
      <TreeItem nodeId="42" label="Wasrik">
        <TreeItem nodeId="43" label="Profil Responden Internal"/>
        <TreeItem nodeId="44" label="Quality in Use Internal"/>
      </TreeItem>
      <TreeItem nodeId="45" label="Kepesertaan">
        <TreeItem nodeId="46" label="Profil Responden Internal"/>
        <TreeItem nodeId="47" label="Quality in Use Internal"/>
      </TreeItem>
      <TreeItem nodeId="48" label="Registrasi Badan Usaha">
        <TreeItem nodeId="49" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="50" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="51" label="e-Dabu">
        <TreeItem nodeId="52" label="Profil Responden Internal"/>
        <TreeItem nodeId="53" label="Quality in Use Internal"/>
        <TreeItem nodeId="54" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="55" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="56" label="SIPP">
        <TreeItem nodeId="57" label="Profil Responden Internal"/>
        <TreeItem nodeId="58" label="Quality in Use Internal"/>
        <TreeItem nodeId="59" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="60" label="Quality in Use Eksternal"/>
      </TreeItem>
      <TreeItem nodeId="61" label="CSTI">
        <TreeItem nodeId="62" label="Profil Responden Internal"/>
        <TreeItem nodeId="63" label="Quality in Use Internal"/>
      </TreeItem>
      <TreeItem nodeId="64" label="Mobile JKN">
        <TreeItem nodeId="65" label="Profil Responden Eksternal"/>
        <TreeItem nodeId="66" label="Quality in Use Eksternal"/>
      </TreeItem>
    </TreeView>
  );
}
