import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import classnames from 'classnames/bind';
import STYLES from './ShareDrawModal.scss';

const c = classnames.bind(STYLES);

const MakeCurrentDrawPublicLink = props => <Link to={`${props.match.path}/public`} {...props} />;
MakeCurrentDrawPublicLink.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

class ShareDrawModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className={c('ShareDrawModal__button-row')}>
        <Button onClick={this.handleClickOpen}>Compartir resultado</Button>
        <Dialog
          fullScreen={this.fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle>¿Quieres compartir los resultados de un sorteo?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para compartir los resultados necesitas crear un sorteo público. De esta manera,
              garantizarás a los participantes que el sorteo sólo se realizó una vez
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button
              component={withRouter(MakeCurrentDrawPublicLink)}
              variant="contained"
              color="primary"
              data-component="ShareDrawModal__button"
              autoFocus
            >
              Crear sorteo público
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ShareDrawModal.propTypes = {};

export default withMobileDialog()(ShareDrawModal);
